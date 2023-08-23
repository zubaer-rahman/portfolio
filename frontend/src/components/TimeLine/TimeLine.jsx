import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import {Event} from "@mui/icons-material";

import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

export default function TimeLine({ timelines = [] }) {
  return (
    <div>
      <Timeline position="alternate">
        {timelines?.map((item, index) => (
          <TimelineItem>
            <TimelineOppositeContent sx={{m:"auto 0"}} align="right" variant="body2" color="text.secondary">8/10/23</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
                <TimelineDot>
                  <Event/>
                </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">Title</Typography>
              <Typography>Description</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
