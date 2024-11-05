import React from 'react';
import styled from 'styled-components';

const BasePage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
`;

const LevelBase = {
  // Extend existing base with new required interfaces
  interfaces: {
    hasInventoryInteraction: false,
    hasTimeBasedElements: false,
    hasComplexNumberMechanics: false,
    isUnstable: false
  },
  
  // New required methods
  methods: {
    onInventoryChange: null,
    onTimeUpdate: null,
    onStabilityCheck: null,
    getComplexProperties: null
  },
  
  // Each level should implement these components
  Front: () => null,
  Back: () => null,
  Left: () => null,
  Right: () => null,
  Top: () => null,
  Bottom: () => null,
  BasePage: () => null
};

export default LevelBase; 