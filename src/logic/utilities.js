/**
 * Copyright (c) Konstantin Kuzmin. All Rights Reserved.
 */

export function onKeyboardSelection(event, fn) {
  if (event.key === ' ' || event.key === 'Enter') {
    event.preventDefault();
    fn();
  }
}

export function onEscape(event, fn) {
  if (event.key === 'Escape') {
    event.preventDefault();
    fn();
  }
}

export function onLeaveTree(event, fn) {
  const wrapper = document.getElementById('gatsby-focus-wrapper');
  if (event.relatedTarget === null) return;
  if (event.relatedTarget === wrapper) return;
  if (event.currentTarget.contains(event.relatedTarget)) return;
  fn();
}

export function onWrongDestination(event, expected, fn) {
  const wrapper = document.getElementById('gatsby-focus-wrapper');
  if (event.relatedTarget === null) return;
  if (event.relatedTarget === wrapper) return;
  if (expected?.contains(event.relatedTarget)) return;
  expected && fn();
}
