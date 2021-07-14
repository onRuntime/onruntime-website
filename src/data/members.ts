import { Member } from "src/types/members";

const members: Member[] = [
  {
    firstname: "Jérémy",
    lastname: "Baudrin",
    job: "main.roles.president.cto",
    thumbnail_url: "/static/images/members/jeremy-baudrin.jpg",
    external_url: "https://linkedin.com/in/jeremybdn",
    joined_at: "2015/01/01",
    // format: yyyy-mm-dd
  },
  {
    firstname: "Antoine",
    lastname: "Kingue",
    job: "main.roles.president.ceo",
    thumbnail_url: "/static/images/members/antoine-kingue.jpg",
    external_url: "https://linkedin.com/in/antoinekm",
    joined_at: "2015/01/01",
  },
  {
    firstname: "Bodin",
    lastname: "Lucas",
    job: "main.roles.designer",
    thumbnail_url: "/static/images/members/lucas-bodin.jpg",
    external_url: "https://lucasb.fr/",
    joined_at: "2019/01/01",
  },
];

export default members;
