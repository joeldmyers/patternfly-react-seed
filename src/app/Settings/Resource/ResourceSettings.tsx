import React, { useState, useEffect } from 'react';
import { PageSection, Title, Progress } from '@patternfly/react-core';
import { number } from 'prop-types';

const ResourceSettings: React.FunctionComponent = () => {
  const [percentDone, setPercentDone] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentDone === 100) {
        setPercentDone(0);
      } else {
        setPercentDone((percentDone) => percentDone + 1);
      }
    }, 250);
    return () => clearInterval(interval);
  }, [percentDone]);

  return (
    <PageSection>
      <Title headingLevel="h1" size="lg">
        Resource Settings Page Title
      </Title>
      <Progress value={percentDone} title="Title" />
    </PageSection>
  );
};

export { ResourceSettings };
