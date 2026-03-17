/**
 * Oceanic Grit Color Palette (2026)
 * 60-30-10 Rule:
 * - 60%: Neutral Base (whites, grays, dark backgrounds)
 * - 30%: Primary Brand Color (Dark Teal #2d3436)
 * - 10%: Accent Color (Fresh Mint #2bcbba)
 * 
 * WCAG AA Compliance: Minimum 4.5:1 contrast ratio
 */

// Primary Brand Colors
const PRIMARY_DARK_TEAL = '#2d3436'; // Primary brand color (Dark background, headings)
const PRIMARY_LIGHT_TEAL = '#006B6E'; // Lighter teal for better readability on light backgrounds
const ACCENT_MINT = '#2bcbba'; // Fresh Mint (CTAs, highlights)
const ACCENT_MINT_DARK = '#1DB89D'; // Darker mint for hover states

// Neutral Colors - Light Mode (60% base)
const LIGHT_BG_PRIMARY = '#FFFFFF'; // Pure white
const LIGHT_BG_SECONDARY = '#F8F9FA'; // Off-white
const LIGHT_SURFACE = '#FFFFFF'; // Card/panel backgrounds
const LIGHT_BORDER = '#E8E8E8'; // Borders, dividers
const LIGHT_TEXT_PRIMARY = '#2d3436'; // Primary text (matches primary color)
const LIGHT_TEXT_SECONDARY = '#666666'; // Secondary text (gray)
const LIGHT_TEXT_TERTIARY = '#999999'; // Tertiary text (light gray)
const LIGHT_DISABLED = '#CCCCCC'; // Disabled elements
const LIGHT_HOVER = '#F5F5F5'; // Hover backgrounds

// Neutral Colors - Dark Mode (60% base)
const DARK_BG_PRIMARY = '#0D1117'; // Very dark background (less harsh than pure black)
const DARK_BG_SECONDARY = '#161B22'; // Slightly lighter for embedded content
const DARK_SURFACE = '#1A1F26'; // Card/panel backgrounds
const DARK_BORDER = '#30363D'; // Borders, dividers
const DARK_TEXT_PRIMARY = '#E0E0E0'; // Primary text (very light gray)
const DARK_TEXT_SECONDARY = '#B0B0B0'; // Secondary text (medium gray)
const DARK_TEXT_TERTIARY = '#7A7A7A'; // Tertiary text (darker gray)
const DARK_DISABLED = '#4A4A4A'; // Disabled elements
const DARK_HOVER = '#2A2D33'; // Hover backgrounds

// Semantic Colors
const SUCCESS = '#10B981'; // Success states
const SUCCESS_LIGHT = '#D1FAE5'; // Success backgrounds (light mode)
const SUCCESS_DARK = '#064E3B'; // Success backgrounds (dark mode)

const WARNING = '#F59E0B'; // Warning states (orange instead of red - reduces anxiety)
const WARNING_LIGHT = '#FEF3C7'; // Warning backgrounds (light mode)
const WARNING_DARK = '#78350F'; // Warning backgrounds (dark mode)

const ERROR = '#EF4444'; // Error states (use sparingly)
const ERROR_LIGHT = '#FEE2E2'; // Error backgrounds (light mode)
const ERROR_DARK = '#7F1D1D'; // Error backgrounds (dark mode)

const INFO = '#3B82F6'; // Informational states
const INFO_LIGHT = '#DBEAFE'; // Info backgrounds (light mode)
const INFO_DARK = '#1E3A8A'; // Info backgrounds (dark mode)

export const Colors = {
  light: {
    // Backgrounds
    background: LIGHT_BG_PRIMARY,
    backgroundSecondary: LIGHT_BG_SECONDARY,
    surface: LIGHT_SURFACE,
    
    // Text
    text: LIGHT_TEXT_PRIMARY,
    textSecondary: LIGHT_TEXT_SECONDARY,
    textTertiary: LIGHT_TEXT_TERTIARY,
    textDisabled: LIGHT_DISABLED,
    
    // Interactive
    tint: PRIMARY_LIGHT_TEAL,
    primary: PRIMARY_LIGHT_TEAL,
    primaryDark: PRIMARY_DARK_TEAL,
    accent: ACCENT_MINT,
    accentDark: ACCENT_MINT_DARK,
    
    // UI Elements
    border: LIGHT_BORDER,
    tabIconDefault: LIGHT_TEXT_TERTIARY,
    tabIconSelected: ACCENT_MINT,
    buttonBackground: PRIMARY_LIGHT_TEAL,
    buttonBackgroundSecondary: LIGHT_BG_SECONDARY,
    hover: LIGHT_HOVER,
    
    // Semantic
    success: SUCCESS,
    successBackground: SUCCESS_LIGHT,
    warning: WARNING,
    warningBackground: WARNING_LIGHT,
    error: ERROR,
    errorBackground: ERROR_LIGHT,
    info: INFO,
    infoBackground: INFO_LIGHT,
  },
  dark: {
    // Backgrounds
    background: DARK_BG_PRIMARY,
    backgroundSecondary: DARK_BG_SECONDARY,
    surface: DARK_SURFACE,
    
    // Text
    text: DARK_TEXT_PRIMARY,
    textSecondary: DARK_TEXT_SECONDARY,
    textTertiary: DARK_TEXT_TERTIARY,
    textDisabled: DARK_DISABLED,
    
    // Interactive
    tint: ACCENT_MINT,
    primary: PRIMARY_DARK_TEAL,
    primaryDark: PRIMARY_DARK_TEAL,
    accent: ACCENT_MINT,
    accentDark: ACCENT_MINT_DARK,
    
    // UI Elements
    border: DARK_BORDER,
    tabIconDefault: DARK_TEXT_TERTIARY,
    tabIconSelected: ACCENT_MINT,
    buttonBackground: ACCENT_MINT,
    buttonBackgroundSecondary: DARK_BG_SECONDARY,
    hover: DARK_HOVER,
    
    // Semantic
    success: SUCCESS,
    successBackground: SUCCESS_DARK,
    warning: WARNING,
    warningBackground: WARNING_DARK,
    error: ERROR,
    errorBackground: ERROR_DARK,
    info: INFO,
    infoBackground: INFO_DARK,
  },
};

export default Colors;
