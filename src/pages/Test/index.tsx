import React from 'react';
import Accordion from "../../components/UI/Accordion";
import {Typography} from "../../components/modules";


const Test = () => {


  return (
    <div>

      <Accordion initialVisibleId='panel-2'>
        <Accordion.Item id={'panel-1'}>
          <Accordion.Summary>
            General settings
          </Accordion.Summary>
          <Accordion.Details>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </Accordion.Details>
        </Accordion.Item>

        <Accordion.Item id={'panel-2'}>
          <Accordion.Summary>
            Profile settings
          </Accordion.Summary>
          <Accordion.Details>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
              varius pulvinar diam eros in elit. Pellentesque convallis laoreet
              laoreet.
            </Typography>
          </Accordion.Details>
        </Accordion.Item>


        <Accordion.Item id={'panel-3'}>
          <Accordion.Summary>
            Profile settings
          </Accordion.Summary>
          <Accordion.Details>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
              varius pulvinar diam eros in elit. Pellentesque convallis laoreet
              laoreet.
            </Typography>
          </Accordion.Details>
        </Accordion.Item>
      </Accordion>
      {/*<NestedComponent/>*/}
    </div>
  );
};


export default Test;

