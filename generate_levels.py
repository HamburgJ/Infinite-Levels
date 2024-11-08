import os

level_template = '''import React from 'react';
import { LevelContainer, StyledCard, CenteredContainer } from './styles/CommonLevelStyles';
import { Card } from 'react-bootstrap';
import HighlightableText from '../UI/HighlightableText';

const Level{level_num} = () => {
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
};

export default Level{level_num};
'''

def generate_level_files():
    # Create directory if it doesn't exist
    os.makedirs('src/components/Levels', exist_ok=True)
    
    # Generate files for levels 16-99
    for level in range(16, 100):
        filename = f'src/components/Levels/Level{level}.js'
        with open(filename, 'w') as f:
            f.write(level_template.format(level_num=level))
        print(f'Generated {filename}')

if __name__ == '__main__':
    generate_level_files() 