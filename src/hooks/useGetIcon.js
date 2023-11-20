/* eslint-disable no-fallthrough */
import { faSun, faCloud, faCloudRain, faCloudShowersHeavy, faBolt, faSnowflake, faSmog } from '@fortawesome/free-solid-svg-icons';

const useGetIcon = (type) => {

    let icon = null;

    switch (type) {
        case 'Clear':
            icon = faSun;
            break;
        case 'Clouds':
            icon = faCloud;
            break;
        case 'Rain':
            icon = faCloudRain;
            break;
        case 'Drizzle':
            icon = faCloudShowersHeavy;
            break;
        case 'Thunderstorm':
            icon = faBolt;
            break;
        case 'Snow':
            icon = faSnowflake;
            break;
        case 'Mist':
        case 'Haze':
            icon = faSmog;
            break;
        default:
            icon = null;
            break;
    }

    return icon;
};

export default useGetIcon;
