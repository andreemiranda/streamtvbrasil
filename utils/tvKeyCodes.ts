
export const TV_KEYS = {
  UP:    [38],
  DOWN:  [40],
  LEFT:  [37],
  RIGHT: [39],
  OK:    [13],
  BACK:  [10009, 461, 8, 27], // Samsung, LG, Web Standard Back, Escape
  NUM_0: [48, 96],
  NUM_1: [49, 97],
  NUM_2: [50, 98],
  NUM_3: [51, 99],
  NUM_4: [52, 100],
  NUM_5: [53, 101],
  NUM_6: [54, 102],
  NUM_7: [55, 103],
  NUM_8: [56, 104],
  NUM_9: [57, 105],
  CH_UP:   [427, 33], // Channel Up / Page Up
  CH_DOWN: [428, 34], // Channel Down / Page Down
  PLAY_PAUSE: [10252, 179],
  STOP: [413, 178],
  RED:    [403],
  GREEN:  [404],
  YELLOW: [405],
  BLUE:   [406],
  INFO: [457, 165],
} as const;

export function isKey(event: KeyboardEvent, keyGroup: readonly number[]): boolean {
  return keyGroup.includes(event.keyCode) || keyGroup.includes(event.which);
}
