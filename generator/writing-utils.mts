import mkdirp from 'mkdirp';
import { writeFile } from 'fs';
import path from 'path';
import _ from 'underscore';
import { OpenAPIObject } from 'openapi3-ts';

export function generateHeader(doc: OpenAPIObject): string {
  const { info } = doc;
  return `/**
   * ${info.title}
   * ${info.description}
   * 
   * OpenAPI spec version: ${info.version}
   * Contact: ${info.contact!.email}
   * 
   * NOTE: This class is auto generated by the bungie-net-core code generator program
   * Repository: {@link https://github.com/owensimpson/bungie-net-core}
   * Adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
   * Do not edit these files manually.
   */
  //`;
}

export function docComment(text: string, params?: string[]) {
  const lines = _.flatten(
    text
      .trim()
      .split('\n')
      .map(l => l.replace(/(.{1,80}(?:\W|$))/g, '$1\n').split('\n'))
  ).map((s: string) => s.trim());
  lines.pop();
  if (params) {
    params.forEach(p =>
      p
        .trim()
        .split('\n')
        .filter((s: string) => s.length > 0)
        .forEach(l => {
          lines.push(l);
        })
    );
  }

  if (lines.length === 1) {
    return `/** ${lines} */`;
  } else {
    return `/**
  ${lines.map(line => (line.length ? ' * ' + line : ' *')).join('\n')}
  */`;
  }
}

export function indent(text: string, indentLevel: number) {
  const lines = text.split('\n');
  return lines.map(line => '  '.repeat(indentLevel) + line).join('\n');
}

export async function writeOutFile(filename: string, contents: string) {
  try {
    await mkdirp(path.dirname(filename));

    writeFile(filename, contents, () => {});
  } catch (e) {
    console.error(e);
  }
}

export function generateImports(
  currentFile: string,
  fileName: string,
  componentNames: string[]
) {
  return `import { ${componentNames.join(', ')} } from '${path.relative(
    currentFile,
    fileName
  )}'`;
}

export function seeLink(component: string) {
  return `@see {@link https://bungie-net.github.io/${component}}`;
}
