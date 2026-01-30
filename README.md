# Age Verification Feature

## Person 4 Work Completed

### What I Built:
- AgeGate component that asks users if they're 21+
- Saves answer in localStorage (remembers after refresh)
- Shows "Access Denied" if under 21
- Reset button for testing

### Files:
- `src/components/AgeGate.jsx` - Age check component
- `src/components/AgeGate.css` - Styling
- `src/App.jsx` - Added AgeGate to main app
- `src/App.css` - Updated styles

### How to Test:
1. Run `npm run dev`
2. Age check appears first
3. Click "I am 21 or older" → See main app
4. Click "I am under 21" → See "Access Denied"
5. Refresh page → Still remembers your choice
6. Click "Reset & Show Age Gate" → Test again
