#!/usr/bin/env node
/**
 * Level Metadata Scanner
 * 
 * Scans level component files to extract navigation links, items, NPCs,
 * and shrine information. Outputs JSON that can be used to populate
 * or verify levelMetadata.js.
 * 
 * Usage:
 *   node scripts/scan_level_metadata.js
 *   node scripts/scan_level_metadata.js --level 42
 *   node scripts/scan_level_metadata.js --uncatalogued
 */

const fs = require('fs');
const path = require('path');

const LEVELS_DIR = path.join(__dirname, '..', 'src', 'components', 'Levels');
const METADATA_FILE = path.join(__dirname, '..', 'src', 'data', 'levelMetadata.js');

// Patterns to detect in level files
const PATTERNS = {
  // Navigation links: <LevelButton targetLevel={X}> or targetLevel="X"
  levelButton: /targetLevel=\{([^}]+)\}|targetLevel="([^"]+)"/g,
  // Shrine: <AchievementShrine requiredCount={N}
  shrine: /requiredCount=\{(\d+)\}/g,
  // Shrine teaser: teaserText="..."
  shrineTeaserText: /teaserText="([^"]+)"/g,
  // Items: Collectable components
  collectableWallet: /CollectableWallet/g,
  collectableCardBox: /CollectableCardBox/g,
  collectableDiamond: /CollectableDiamond/g,
  collectableBlackHole: /CollectableBlackHole/g,
  collectableCard: /CollectableCard\s+cardId=["'{]([^"'}]+)/g,
  collectableKey: /CollectableKey/g,
  collectableCoin: /CollectableCoinBill/g,
  // NPCs
  jester: /<Jester/g,
  // Mechanics
  numberEntry: /<NumberEntry/g,
  changeMachine: /ChangeMachineButton/g,
  scale: /<Scale[\s/>]/g,
  lockedBox: /<LockedBox/g,
  highlightableText: /HighlightableText/g,
  // Level title (from first HighlightableText or title prop)
  levelTitle: /title=["']([^"']+)["']|<HighlightableText[^>]*text="([^"]+)"/,
};

function scanLevelFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath, '.js');
  
  const result = {
    file: fileName,
    leadsTo: [],
    items: [],
    npcs: [],
    mechanics: [],
    shrines: [],
    hasHighlightableText: false,
  };

  // Extract navigation links
  let match;
  const buttonPattern = /targetLevel=\{([^}]+)\}|targetLevel="([^"]+)"/g;
  while ((match = buttonPattern.exec(content)) !== null) {
    const target = (match[1] || match[2]).replace(/['"]/g, '').trim();
    if (!result.leadsTo.includes(target)) {
      result.leadsTo.push(target);
    }
  }

  // Extract shrines
  const shrinePattern = /requiredCount=\{(\d+)\}/g;
  while ((match = shrinePattern.exec(content)) !== null) {
    result.shrines.push({ requiredCount: parseInt(match[1]) });
  }

  // Detect items
  if (PATTERNS.collectableWallet.test(content)) result.items.push('wallet');
  PATTERNS.collectableWallet.lastIndex = 0;
  if (PATTERNS.collectableCardBox.test(content)) result.items.push('card box');
  PATTERNS.collectableCardBox.lastIndex = 0;
  if (PATTERNS.collectableDiamond.test(content)) result.items.push('diamond');
  PATTERNS.collectableDiamond.lastIndex = 0;
  if (PATTERNS.collectableBlackHole.test(content)) result.items.push('black hole');
  PATTERNS.collectableBlackHole.lastIndex = 0;
  if (PATTERNS.collectableKey.test(content)) result.items.push('key');
  PATTERNS.collectableKey.lastIndex = 0;
  if (PATTERNS.collectableCoin.test(content)) result.items.push('coins');
  PATTERNS.collectableCoin.lastIndex = 0;

  const cardPattern = /CollectableCard\s+cardId=["'{]([^"'}]+)/g;
  while ((match = cardPattern.exec(content)) !== null) {
    result.items.push(`card: ${match[1]}`);
  }

  // Detect NPCs
  if (PATTERNS.jester.test(content)) result.npcs.push('jester');
  PATTERNS.jester.lastIndex = 0;

  // Detect mechanics
  if (PATTERNS.numberEntry.test(content)) result.mechanics.push('number entry');
  PATTERNS.numberEntry.lastIndex = 0;
  if (PATTERNS.changeMachine.test(content)) result.mechanics.push('change machine');
  PATTERNS.changeMachine.lastIndex = 0;
  if (PATTERNS.scale.test(content)) result.mechanics.push('scale');
  PATTERNS.scale.lastIndex = 0;
  if (PATTERNS.lockedBox.test(content)) result.mechanics.push('locked box');
  PATTERNS.lockedBox.lastIndex = 0;
  if (PATTERNS.highlightableText.test(content)) result.hasHighlightableText = true;
  PATTERNS.highlightableText.lastIndex = 0;

  return result;
}

function getLevelIdFromFileName(fileName) {
  // Convert file names to level IDs
  // Level42.js → '42'
  // LevelNeg1.js → '-1'  
  // LevelNeg0.js → '-0'
  // Level1Plus1i.js → '1+1i'
  // LevelDoubleOSeven.js → '207'
  // ShrineLevel.js → special
  
  const name = fileName.replace('.js', '');
  
  if (name.startsWith('Level')) {
    let id = name.replace('Level', '');
    
    // Handle negative levels
    if (id.startsWith('Neg')) {
      id = '-' + id.replace('Neg', '');
    }
    
    // Handle complex numbers (e.g., Level1Plus1i → 1+1i)
    if (id.includes('Plus') && id.includes('i')) {
      id = id.replace('Plus', '+').replace(/i$/, 'i');
    }
    if (id.includes('Minus') && id.includes('i')) {
      id = id.replace('Minus', '-').replace(/i$/, 'i');
    }
    
    // Handle special names
    if (id === 'DoubleOSeven') return '207';
    if (id === 'DiamondWeight') return '3.52';
    if (id === 'Demo') return 'Demo';
    if (id === 'Pi') return '3.14159';
    if (id === 'E') return '2.71828';
    
    return id;
  }
  
  return null;
}

function main() {
  const args = process.argv.slice(2);
  const specificLevel = args.includes('--level') ? args[args.indexOf('--level') + 1] : null;
  const showUncatalogued = args.includes('--uncatalogued');
  
  // Get list of level files
  const files = fs.readdirSync(LEVELS_DIR)
    .filter(f => f.endsWith('.js') && f.startsWith('Level'));
  
  console.log(`Found ${files.length} level files\n`);
  
  const results = {};
  
  for (const file of files) {
    const levelId = getLevelIdFromFileName(file);
    if (!levelId) continue;
    if (specificLevel && levelId !== specificLevel) continue;
    
    const filePath = path.join(LEVELS_DIR, file);
    const scan = scanLevelFile(filePath);
    results[levelId] = scan;
  }

  if (showUncatalogued) {
    // Load existing metadata to find what's missing
    console.log('=== UNCATALOGUED LEVELS ===\n');
    console.log('Levels with files but no metadata entry:');
    
    // Read the metadata file and extract keys (simple regex approach)
    const metaContent = fs.readFileSync(METADATA_FILE, 'utf8');
    
    for (const [levelId, scan] of Object.entries(results)) {
      // Check if the level ID appears as a key in the metadata
      const keyPattern = new RegExp(`['"]${levelId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]\\s*:`);
      if (!keyPattern.test(metaContent)) {
        console.log(`  ${levelId} (${scan.file}.js)`);
        if (scan.leadsTo.length) console.log(`    → leads to: ${scan.leadsTo.join(', ')}`);
        if (scan.items.length) console.log(`    ★ items: ${scan.items.join(', ')}`);
        if (scan.shrines.length) console.log(`    🔒 shrines: ${scan.shrines.map(s => `🔒${s.requiredCount}`).join(', ')}`);
        if (scan.npcs.length) console.log(`    👤 npcs: ${scan.npcs.join(', ')}`);
        console.log();
      }
    }
  } else {
    // Show all scanned results
    for (const [levelId, scan] of Object.entries(results)) {
      console.log(`--- Level ${levelId} (${scan.file}.js) ---`);
      if (scan.leadsTo.length) console.log(`  Leads to: ${scan.leadsTo.join(', ')}`);
      if (scan.items.length) console.log(`  Items: ${scan.items.join(', ')}`);
      if (scan.shrines.length) console.log(`  Shrines: ${scan.shrines.map(s => `🔒${s.requiredCount}`).join(', ')}`);
      if (scan.npcs.length) console.log(`  NPCs: ${scan.npcs.join(', ')}`);
      if (scan.mechanics.length) console.log(`  Mechanics: ${scan.mechanics.join(', ')}`);
      if (scan.hasHighlightableText) console.log(`  Has HighlightableText: yes`);
      console.log();
    }
  }
  
  // Summary
  const totalLevels = Object.keys(results).length;
  const withShrines = Object.values(results).filter(r => r.shrines.length > 0).length;
  const withItems = Object.values(results).filter(r => r.items.length > 0).length;
  const withNPCs = Object.values(results).filter(r => r.npcs.length > 0).length;
  
  console.log('=== SUMMARY ===');
  console.log(`Total levels scanned: ${totalLevels}`);
  console.log(`With shrines: ${withShrines}`);
  console.log(`With items: ${withItems}`);
  console.log(`With NPCs: ${withNPCs}`);
}

main();
