import { IconType } from './types';
import { getIconsFromFile } from './get-icons-from-file';

export function getIconNamesFromFile(fileContent: string) {
  const icons = {
    far: <string[]>[],
    fal: <string[]>[],
    fas: <string[]>[],
    fab: <string[]>[]
  };

  // read icons from file content
  const fileIcons = getIconsFromFile(fileContent);

  // convert fileIcons into target structure
  Object.keys(icons || {}).forEach(iconType => {
    icons[iconType] = Object.keys(fileIcons[iconType] || {});
  });

  // return found icons
  return icons;
};