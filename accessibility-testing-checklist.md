# Accessibility Testing Checklist

## Quick Testing Guide for Developers

### Browser-Based Testing

#### 1. Keyboard Navigation
- [ ] Press `Tab` to navigate through all interactive elements
- [ ] Verify logical tab order (left-to-right, top-to-bottom)
- [ ] Check that focus indicators are visible on all elements
- [ ] Test `Shift + Tab` for reverse navigation
- [ ] Verify `Enter` and `Space` work on buttons and links
- [ ] Test `Escape` key closes modal dialogs

#### 2. Screen Reader Testing (macOS VoiceOver)
- [ ] Turn on VoiceOver: `Cmd + F5`
- [ ] Navigate with `Ctrl + Option + Arrow keys`
- [ ] Test headings: `Ctrl + Option + Cmd + H`
- [ ] Test landmarks: `Ctrl + Option + U`
- [ ] Verify all images have alt text announced
- [ ] Check that interactive elements are properly labeled

#### 3. Mobile Touch Targets
- [ ] Use browser dev tools mobile simulation
- [ ] Verify all touch targets are at least 44px
- [ ] Test with thumb on actual mobile device
- [ ] Check spacing between adjacent touch targets

#### 4. Color and Contrast
- [ ] Use browser accessibility inspector
- [ ] Check contrast ratios meet 4.5:1 minimum
- [ ] Test with high contrast mode enabled
- [ ] Verify design works without color alone

#### 5. Motion and Animation
- [ ] Enable reduced motion: System Preferences > Accessibility > Display > Reduce Motion
- [ ] Verify all animations are disabled or reduced
- [ ] Check that scroll behavior becomes instant
- [ ] Test that parallax effects are disabled

### Automated Testing Tools

#### Browser Extensions
- **axe DevTools**: Comprehensive accessibility scanner
- **WAVE**: Visual accessibility evaluation
- **Lighthouse**: Built-in Chrome audit tool

#### Command Line Testing
```bash
# Install axe-cli
npm install -g @axe-core/cli

# Run accessibility audit
axe http://localhost:3001

# Run Lighthouse audit
lighthouse http://localhost:3001 --only-categories=accessibility
```

### Quick Fixes Reference

#### Common Issues and Solutions

1. **Missing Alt Text**
   ```tsx
   // Bad
   <img src="logo.png" />
   
   // Good
   <img src="logo.png" alt="Company logo" />
   ```

2. **Poor Focus Indicators**
   ```css
   /* Bad */
   :focus { outline: none; }
   
   /* Good */
   :focus-visible {
     outline: 2px solid #339955;
     outline-offset: 2px;
   }
   ```

3. **Insufficient Touch Targets**
   ```css
   /* Bad */
   .button { padding: 4px 8px; }
   
   /* Good */
   .button { 
     padding: 12px 16px; 
     min-height: 44px;
   }
   ```

4. **Missing ARIA Labels**
   ```tsx
   // Bad
   <button><IconMenu /></button>
   
   // Good
   <button aria-label="Open navigation menu">
     <IconMenu />
   </button>
   ```

### Testing Checklist Summary

- [ ] **Keyboard**: All functionality available via keyboard
- [ ] **Screen Reader**: Content properly announced
- [ ] **Focus**: Visible focus indicators on all interactive elements
- [ ] **Contrast**: 4.5:1 minimum ratio for normal text
- [ ] **Touch Targets**: 44px minimum size on mobile
- [ ] **Motion**: Respects prefers-reduced-motion
- [ ] **Semantics**: Proper HTML structure and ARIA labels
- [ ] **Language**: Page language declared
- [ ] **Forms**: Labels associated with inputs
- [ ] **Error Handling**: Accessible error messages

### Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Emergency Contact
If accessibility issues are found in production, prioritize fixes in this order:
1. **Keyboard navigation blockers** (Level A)
2. **Screen reader content issues** (Level A) 
3. **Color contrast failures** (Level AA)
4. **Touch target sizing** (Level AA)
5. **Motion/animation issues** (Level AA)