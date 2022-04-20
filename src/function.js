export default function formatting(regex) {
  let result = regex.replace(/^[87\s]/gm, '+7');
  result = result.replace(/[!()-\s]/gm, '');
  return result;
}
