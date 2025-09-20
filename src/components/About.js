import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>This is the Food Website</h1>
      <h3>This About page is created by React Router</h3>
      <UserClass
        name={"MOKA.NAVEEN (class Component)"}
        location={"Amalapuram"}
      />
    </div>
  );
};
export default About;
