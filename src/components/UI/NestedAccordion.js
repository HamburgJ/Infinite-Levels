import React from 'react';
import { Accordion } from 'react-bootstrap';
import styled from 'styled-components';
import HighlightableText from './HighlightableText';

const AccordionWrapper = styled.div`
  margin: 0.5rem 0;
`;

const TextWrapper = styled.div`
  padding: 0.5rem;
`;
const StyledAccordion = styled(Accordion)`
  .accordion-button:not(.collapsed) {
    color: inherit;
    background-color: rgba(0, 0, 0, 0.03);
    box-shadow: none;
  }

  .accordion-button:focus {
    box-shadow: none;
    border-color: rgba(0, 0, 0, 0.125);
  }

  .accordion-button::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  }

  .accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  }
`;
const NestedAccordion = ({ 
  data, 
  openSections = [], 
  visitedSections = [], 
  onToggle,
  depth = 0, 
  path = '' 
}) => {
  if (Array.isArray(data)) {
    if (data.length === 0) {
      return (
        <TextWrapper>
          <HighlightableText text="Keep searching..." />
        </TextWrapper>
      );
    }

    if (typeof data[0] === 'string' || React.isValidElement(data[0])) {
      return (
        <TextWrapper>
          {typeof data[0] === 'string' ? (
            <HighlightableText text={data.join(' ')} />
          ) : (
            data[0]
          )}
        </TextWrapper>
      );
    }

    return (
      <StyledAccordion 
        activeKey={openSections.filter(key => key.startsWith(path))}
        alwaysOpen
      >
        {data.map((item, index) => {
          const currentPath = path ? `${path}-${index}` : `${index}`;
          const isVisited = visitedSections.includes(currentPath);
          
          return (
            <Accordion.Item 
              key={currentPath} 
              eventKey={currentPath}
              className={isVisited ? 'visited' : ''}
            >
              <Accordion.Header 
                onClick={() => onToggle(currentPath)}
              />
              <Accordion.Body>
                <NestedAccordion 
                  data={item}
                  openSections={openSections}
                  visitedSections={visitedSections} 
                  onToggle={onToggle}
                  depth={depth + 1}
                  path={currentPath}
                />
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </StyledAccordion>
    );
  }
  return null;
};

export default NestedAccordion; 