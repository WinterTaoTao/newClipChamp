import { DropdownItem } from '../dropdown-item';

const iconFolderPath = 'assets/icons/';

export const ProductDropdownItems: DropdownItem[] = [
  {
    iconPath: iconFolderPath + '4in1.svg',
    jumpLink: 'https://clipchamp.com/en/dashboard',
    title: '4 in 1',
    introduction: 'Brief introduction'
  },
  {
    iconPath: iconFolderPath + 'video-request.svg',
    jumpLink: 'https://clipchamp.com/en/video-sharing-request',
    title: 'Video Request',
    introduction: 'Brief introduction'
  },
  {
    iconPath: iconFolderPath + 'api.svg',
    jumpLink: 'https://clipchamp.com/en/api',
    title: 'API',
    introduction: 'Brief introduction'
  }
];
