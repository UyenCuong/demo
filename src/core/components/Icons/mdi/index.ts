import * as mdi from '@mdi/js'

const kebaCase = (str: string) => str && str
  .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
  .replace(/[\s_]+/g, '-') // replace all spaces and low dash
  .toLowerCase()
const svgList = Object.entries(mdi).slice(1)
const icons: {[key: string]: any} = {}
// eslint-disable-next-line no-restricted-syntax
for (const [key, svgPath] of svgList) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [, name] = key.match(/^mdi(\w+)/i)
    const iconName = kebaCase(name)
    icons[iconName] = svgPath
  } catch (e) {
    console.error(e)
  }
}
export default icons
