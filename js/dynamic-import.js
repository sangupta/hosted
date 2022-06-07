/**
 * Replicate the `import` function on window object
 * so that scripts can use it without conflicting with bundlers.
 */
window.__import__ = function(url) {
  return import(url);
}
