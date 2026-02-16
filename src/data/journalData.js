/**
 * Unified Journal Data
 *
 * Merges achievements and quests into a single "journal" system.
 * Achievements = "Discoveries" — one-off things the player unlocked.
 * Quests       = "Journeys"    — multi-step chains with progress bars.
 *
 * Both share the same UI in the Journal modal. Quests are just
 * achievements whose `journey` field is truthy and carries waypoints.
 *
 * This module re-exports the original data with categories attached
 * so existing code keeps working while the Journal UI can filter by type.
 */
import achievementsRaw from './achievements';
import questsRaw from './quests';

// ─── Categories ──────────────────────────────────────────────────
export const JOURNAL_CATEGORIES = {
  DISCOVERY: 'discovery',   // Standard achievements
  JOURNEY: 'journey',       // Multi-step quest chains
  MILESTONE: 'milestone',   // Big numeric milestones
  SECRET: 'secret',         // Hidden / meta discoveries
};

// Tag selected achievements as milestones for visual grouping
const MILESTONE_IDS = new Set([
  'LEVEL_5', 'LEVEL_6', 'LEVEL_20', 'LEVEL_100', 'LEVEL_1000',
  'LEVEL_1M', 'LEVEL_1B', 'LEVEL_10B10', 'LEVEL_GOOGOL',
  'TUTORIAL_COMPLETE', 'FIRST_STEPS',
]);

/**
 * Builds a unified journal entry list.
 * Each entry has:
 *   { id, title, emoji, description, category, secret?, revealAfter?, journey? }
 *
 * For journeys, `journey` contains { waypoints, revealThreshold, isCardQuest, completionAchievement }.
 */
export function buildJournalEntries() {
  const entries = {};

  // 1) Standard achievements → discoveries / milestones
  Object.values(achievementsRaw).forEach(a => {
    entries[a.id] = {
      ...a,
      category: MILESTONE_IDS.has(a.id)
        ? JOURNAL_CATEGORIES.MILESTONE
        : a.secret
          ? JOURNAL_CATEGORIES.SECRET
          : JOURNAL_CATEGORIES.DISCOVERY,
    };
  });

  // 2) Quests → journeys (also creates a matching achievement entry if it has a completionAchievement)
  Object.values(questsRaw).forEach(q => {
    entries[`JOURNEY_${q.id}`] = {
      id: `JOURNEY_${q.id}`,
      title: q.title,
      emoji: q.emoji,
      description: q.description,
      category: JOURNAL_CATEGORIES.JOURNEY,
      secret: false,
      journey: {
        questId: q.id,
        waypoints: q.waypoints,
        revealThreshold: q.revealThreshold,
        isCardQuest: q.isCardQuest || false,
        completionAchievement: q.completionAchievement,
      },
    };
  });

  return entries;
}

/** Pre-built entries for import convenience */
const journalEntries = buildJournalEntries();
export default journalEntries;
