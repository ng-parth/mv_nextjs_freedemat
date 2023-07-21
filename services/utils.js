export function getQueryParams(qstring, key = null) {
  // eslint-disable-line
  if (!qstring) return {};
  const qs = qstring[0] === '?' ? qstring.substring(1) : qstring;
  const pairs = qs.split('&');
  const result = {};
  pairs.forEach((p) => {
    const pair = p.split('=');
    const key = pair[0];
    const value = decodeURIComponent(p.substring(pair[0].length + 1) || '');
    if (result[key]) {
      if (Object.prototype.toString.call(result[key]) === '[object Array]') {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      result[key] = value;
      if (value === 'false') result[key] = false;
      if (value === 'true') result[key] = true;
    }
  });
  const qpJson = JSON.parse(JSON.stringify(result));
  if (qpJson && key) return qpJson[key];
  return qpJson;
}
