import React, { useState } from "react";
import Accordion from "../../components/UI/Accordion";
import { Typography } from "../../components/modules";
import { ColorEnum } from "../../helpers/types";

export type HobbyOption = {
  label: string;
  value: string;
};

export type UserType = {
  name: string;
  id: string;
  email: string;
  hobbies?: HobbyOption[];
};

const Test = () => {
  const [users, setUsers] = useState<UserType[]>([
    {
      id: "1",
      name: "Olya",
      email: "osshalakhina@gmail.com",
      hobbies: [
        { label: "Reading", value: "reading" },
        { label: "Swimming", value: "swimming" },
        {
          label: "Cooking",
          value: "cooking",
        },
      ],
    },
    {
      id: "2",
      name: "Yevhen",
      email: "arr.ess1998@gmail.com",
      hobbies: [
        { label: "Reading", value: "reading" },
        { label: "Surfing", value: "surf" },
        {
          label: "Cooking",
          value: "cooking",
        },
      ],
    },

    {
      id: "3",
      name: "Alex",
      email: "arr.ess1998@gmail.com",
      hobbies: [
        { label: "Reading", value: "reading" },
        { label: "Surfing", value: "surf" },
        {
          label: "Cooking",
          value: "cooking",
        },
      ],
    },
  ]);

  return (
    <div>
      <Accordion>
        {users.map((user) => (
          <Accordion.Item key={user.id} id={user.id}>
            <Accordion.Summary>
              {" "}
              <h2>{user.name} </h2>
            </Accordion.Summary>

            <Accordion.Details>
              <Typography>
                <h4 style={{ color: `var(${ColorEnum.blue})` }}>Email:</h4>{" "}
                {user.email}
              </Typography>
              <Typography>
                {" "}
                <h4 style={{ color: `var(${ColorEnum.blue})` }}>Hobbies: </h4>
              </Typography>
              {user.hobbies?.map((hobby) => (
                <div>
                  {" "}
                  <span
                    className="mr-2"
                    style={{ color: `var(${ColorEnum.blue})` }}
                  >
                    &#10003;
                  </span>
                  {hobby.label}
                </div>
              ))}
            </Accordion.Details>
          </Accordion.Item>
        ))}
      </Accordion>

      {/* <Accordion initialVisibleId="panel-2">
        <Accordion.Item id={"panel-1"}>
          <Accordion.Summary>Olga</Accordion.Summary>
          <Accordion.Details>
            <Typography>Email</Typography>
          </Accordion.Details>
        </Accordion.Item>

        <Accordion.Item id={"panel-2"}>
          <Accordion.Summary>Yevhen</Accordion.Summary>
          <Accordion.Details>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </Accordion.Details>
        </Accordion.Item>

        <Accordion.Item id={"panel-3"}>
          <Accordion.Summary>Alex</Accordion.Summary>
          <Accordion.Details>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
          </Accordion.Details>
        </Accordion.Item>
      </Accordion> */}
      {/*<NestedComponent/>*/}
    </div>
  );
};

export default Test;
