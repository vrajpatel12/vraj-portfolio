const name = "https://vraj-portfolio.vercel.app"
import {HOME,SERVICES,SERVICES_INDIVIDUAL,BLOGS,BLOGS_INDIVIDUAL,PORTFOLIO,PORTFOLIO_INDIVIDUAL,ABOUT,CONTACT} from './page-url'

export const HOME_META = name + HOME;
export const SERVICES_META = name + SERVICES;
export const SERVICES_INDIVIDUAL_META = (slug="slug") => name + SERVICES_INDIVIDUAL(slug);
export const BLOGS_META = name + BLOGS;
export const BLOGS_INDIVIDUAL_META = (slug="slug") => name + BLOGS_INDIVIDUAL(slug);
export const PORTFOLIO_META = name + PORTFOLIO;
export const PORTFOLIO_INDIVIDUAL_META = (slug="slug") => name + PORTFOLIO_INDIVIDUAL(slug);
export const ABOUT_META = name + ABOUT;
export const CONTACT_META = name + CONTACT;