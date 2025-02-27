export default {
  FILE_NAME_REGEX: /^((?![:<>"\/\\\|\?\*]).)*$/,
  FONT_SIZE: /^[0-9\.]{1,3}(px|rem|em|pt|mm|pc|in)$/,
  HEX_COLOR: /^#([a-f0-9]{3}){1,2}([a-f0-9]{2})?$/i,
  RGB_COLOR: /^rgba?\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(\s*,\s*\d?(\.\d+)?)?\)$/i,
  HSL_COLOR: /^hsla?\(([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(\s*,\s*\d?(\.\d+)?)?\)$/i,
  DEFAULT_FILE_SESSION: 'default-session',
  DEFAULT_FILE_NAME: 'untitled.txt',
  CONSOLE_PORT: 8159,
  SERVER_PORT: 8158,
  PREVIEW_PORT: 8158,
  VIBRATION_TIME: 30,
  VIBRATION_TIME_LONG: 150,
  SCROLL_SPEED_FAST: 0.01,
  SCROLL_SPEED_NORMAL: 0.04,
  SCROLL_SPEED_SLOW: 0.08,
  CUSTOM_THEME: 'body[theme="custom"]',
  FEEDBACK_EMAIL: 'acode@foxdebug.com',
  ERUDA_CDN: 'https://cdn.jsdelivr.net/npm/eruda',
  PAID_VERSION: 'https://play.google.com/store/apps/details?id=com.foxdebug.acode',
  PLUGIN_LIST: 'https://raw.githubusercontent.com/deadlyjack/acode-plugins/main/list.json',
  GITHUB_TOKEN: 'https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token',
  SKULIST: ["basic", "bronze", "silver", "gold", "platinum"],
  encodings: [
    'utf-8',
    'ibm866',
    'iso-8859-2',
    'iso-8859-3',
    'iso-8859-4',
    'iso-8859-5',
    'iso-8859-6',
    'iso-8859-7',
    'iso-8859-8',
    'iso-8859-8i',
    'iso-8859-10',
    'iso-8859-13',
    'iso-8859-14',
    'iso-8859-15',
    'iso-8859-16',
    'koi8-r',
    'koi8-u',
    'macintosh',
    'windows-874',
    'windows-1250',
    'windows-1251',
    'windows-1252',
    'windows-1253',
    'windows-1254',
    'windows-1255',
    'windows-1256',
    'windows-1257',
    'windows-1258',
    'x-mac-cyrillic',
    'gbk',
    'gb18030',
    'hz-gb-2312',
    'big5',
    'euc-jp',
    'iso-2022-jp',
    'shift-jis',
    'euc-kr',
    'iso-2022-kr',
    'utf-16be',
    'utf-16le',
    'x-user-defined',
    'replacement',
  ],
  editorThemeList: {
    ambiance: scheme('ambiance', 'dark'),
    chaos: scheme('chaos', 'dark'),
    chrome: scheme('chrome', 'light'),
    cloud9_day: scheme('cloud9 day', 'light'),
    cloud9_night: scheme('cloud9 night', 'dark'),
    cloud9_night_low_color: scheme('cloud9 night low color', 'dark'),
    clouds: scheme('clouds', 'light'),
    clouds_midnight: scheme('clouds midnight', 'dark'),
    cobalt: scheme('cobalt', 'dark'),
    crimson_editor: scheme('crimson editor', 'light'),
    dawn: scheme('dawn', 'light'),
    dracula: scheme('dracula', 'dark'),
    dreamweaver: scheme('dreamweaver', 'light'),
    eclipse: scheme('eclipse', 'light'),
    github: scheme('github', 'light'),
    gob: scheme('gob', 'dark'),
    gruvbox: scheme('gruvbox', 'dark'),
    gruvbox_dark_hard: scheme('gruvbox dark hard', 'dark'),
    gruvbox_light_hard: scheme('gruvbox light hard', 'light'),
    idle_fingers: scheme('idle_fingers', 'dark'),
    iplastic: scheme('iplastic', 'light'),
    katzenmilch: scheme('katzenmilch', 'light'),
    kr_theme: scheme('kr_theme', 'dark'),
    kuroir: scheme('kuroir', 'light'),
    merbivore: scheme('merbivore', 'dark'),
    merbivore_soft: scheme('merbivore_soft', 'dark'),
    mono_industrial: scheme('mono_industrial', 'dark'),
    monokai: scheme('monokai', 'dark'),
    nord_dark: scheme('nord_dark', 'dark'),
    one_dark: scheme('one_dark', 'dark'),
    pastel_on_dark: scheme('pastel_on_dark', 'dark'),
    solarized_dark: scheme('solarized_dark', 'dark'),
    solarized_light: scheme('solarized_light', 'light'),
    sqlserver: scheme('sqlserver', 'light'),
    terminal: scheme('terminal', 'dark'),
    textmate: scheme('textmate', 'light'),
    tomorrow: scheme('tomorrow', 'light'),
    tomorrow_night: scheme('tomorrow_night', 'dark'),
    tomorrow_night_blue: scheme('tomorrow_night_blue', 'dark'),
    tomorrow_night_bright: scheme('tomorrow_night_bright', 'dark'),
    tomorrow_night_eighties: scheme('tomorrow_night_eighties', 'dark'),
    twilight: scheme('twilight', 'dark'),
    vibrant_ink: scheme('vibrant_ink', 'dark'),
    xcode: scheme('xcode', 'light'),
  },

  /**
   * 
   * @type {AppThemeList}
   */
  appThemeList: {
    custom: scheme('custom', 'dark', false),
    atticus: scheme('atticus', 'dark', false, '#201e1e', '#363333'),
    bump: scheme('bump', 'dark', false, '#1c2126', '#303841'),
    bling: scheme('bling', 'dark', false, '#131326', '#202040'),
    black: scheme('black', 'dark', false, '#000000', '#000000'),
    dark: scheme('dark', 'dark', true, '#1d1d1d', '#313131'),
    moon: scheme('moon', 'dark', false, '#14181d', '#222831'),
    ocean: scheme('ocean', 'dark', false, '#13131a', '#20202c'),
    tomyris: scheme('tomyris', 'dark', false, '#230528', '#3b0944'),
    menes: scheme('menes', 'dark', false, '#1f2226', '#353941'),
    default: scheme('default', 'dark', true, '#5c5c99', '#9999ff'),
    light: scheme('light', 'light', false, '#999999', '#ffffff'),
  },
};

/**
 *
 * @param {string} type
 * @param {"light"|"dark"} type
 * @param {boolean} [isFree]
 * @param {string} [darken]  primary color darkened by 40%
 * @param {string} [primary]
 * @returns {ThemeData}
 */
function scheme(name, type, isFree, darken, primary) {
  if (typeof isFree === undefined) {
    return {
      name,
      type,
    };
  }

  return {
    name,
    type,
    isFree,
    darken,
    primary,
  };
}
