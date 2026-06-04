const STORAGE_KEY = 'shopwith_b_clicks';

/**
 * Returns all click records from localStorage.
 * @returns {Array<{outfitName: string, itemName: string, brand: string, timestamp: string}>}
 */
export function getClicks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Records a click event for an outfit item.
 * @param {string} outfitName
 * @param {string} itemName
 * @param {string} brand
 */
export function recordClick(outfitName, itemName, brand) {
  const clicks = getClicks();
  clicks.push({
    outfitName,
    itemName,
    brand,
    timestamp: new Date().toISOString(),
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clicks));
  } catch {
    // storage full or unavailable — silently fail
  }
}

/**
 * Aggregates raw click records into summary rows.
 * @returns {Array<{outfitName: string, itemName: string, brand: string, count: number, lastClicked: string}>}
 */
export function getClickSummary() {
  const clicks = getClicks();
  const map = {};

  for (const click of clicks) {
    const key = `${click.outfitName}|||${click.itemName}`;
    if (!map[key]) {
      map[key] = {
        outfitName: click.outfitName,
        itemName: click.itemName,
        brand: click.brand,
        count: 0,
        lastClicked: click.timestamp,
      };
    }
    map[key].count += 1;
    if (click.timestamp > map[key].lastClicked) {
      map[key].lastClicked = click.timestamp;
    }
  }

  return Object.values(map).sort((a, b) => b.count - a.count);
}

/**
 * Clears all stored click data.
 */
export function clearClicks() {
  localStorage.removeItem(STORAGE_KEY);
}
