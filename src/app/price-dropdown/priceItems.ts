import {DropdownItem} from '../dropdown-item';

const iconFolerPath = 'assets/icons/';

export const DropdownItems: DropdownItem[] = [
    {
        iconPath: iconFolerPath + '4in1.svg',
        urlPath: 'https://clipchamp.com/en/pricing/compress-record',
        text: '4 in 1'
    },

    {
        iconPath: iconFolerPath + 'video-request.svg',
        urlPath: 'https://clipchamp.com/en/video-sharing-request',
        text: 'Video Request'
    },

    {
        iconPath: iconFolerPath + 'api.svg',
        urlPath: 'https://clipchamp.com/en/pricing/api-access#compare-api-plans',
        text: 'API'
    }
];
