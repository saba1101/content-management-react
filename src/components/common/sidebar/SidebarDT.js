import IconDashboard from '@/assets/icons/svg/navigation/dashboard.svg'
import IconPosts from '@/assets/icons/svg/navigation/posts.svg'
import IconMedia from '@/assets/icons/svg/navigation/media.svg'
import IconTags from '@/assets/icons/svg/navigation/tags.svg'
import IconSettings from '@/assets/icons/svg/navigation/settings.svg'


export const Data = [
    {
        label : 'Dashboard',
        route : '/',
        imgSrc : IconDashboard,
    },
    {
        label : 'Posts',
        route : '/posts',
        imgSrc : IconPosts,
    },
    {
        label : 'Media',
        route : '/media',
        imgSrc : IconMedia,
    },
    {
        label : 'Tags',
        route : '/tags',
        imgSrc : IconTags,
    },
    {
        label : 'Settings',
        route : '/settings',
        imgSrc : IconSettings,
    }
]