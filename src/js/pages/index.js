import renderAbout from "./about";
import renderContact from "./contact";
import renderMain from "./main";
import render404 from "./notfound";
import renderPorjects from "./projects";

export default {
    "/": renderMain,
    "/about": renderAbout,
    "/contact": renderContact,
    "/projects": renderPorjects,
    "404": render404,
}