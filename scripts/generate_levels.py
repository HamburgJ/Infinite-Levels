import os

level_template = '''import React from 'react';
import {{ Card }} from 'react-bootstrap';
import {{ LevelContainer, StyledCard }} from './styles/CommonLevelStyles';
import HighlightableText from '../UI/HighlightableText';

const Level{level_num} = () => {{
  return (
    <LevelContainer>
      <StyledCard>
        <Card.Body>
          <Card.Title>Level {level_num}</Card.Title>
          <Card.Text>
            <HighlightableText text="This is level {level_num}." />
          </Card.Text>
        </Card.Body>
      </StyledCard>
    </LevelContainer>
  );
}};

export default Level{level_num};'''

def generate_level_files():
    base_dir = 'src/components/Levels'
    os.makedirs(base_dir, exist_ok=True)
    
    for level in range(16, 100):
        filename = f'{base_dir}/Level{level}.js'
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(level_template.format(level_num=level))

if __name__ == '__main__':
    generate_level_files() 