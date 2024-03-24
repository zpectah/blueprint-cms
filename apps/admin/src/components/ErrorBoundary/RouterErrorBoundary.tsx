import React from 'react';
import { Link, useRouteError, useNavigate } from 'react-router-dom';
import { styled, Container, Box, Typography, OutlinedInput, Chip, Button, Alert } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { ROUTES } from '../../config';
import { SPACING_BASE } from '../../styles';

const BoundaryWrapper = styled(Box)({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
const BoundaryContainer = styled(Box)({});
const BoundaryHeading = styled(Box)({
  width: '100%',
  padding: SPACING_BASE,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: SPACING_BASE,
});
const BoundaryMeta = styled(Box)({
  width: '100%',
  padding: SPACING_BASE,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: SPACING_BASE,
});
const BoundaryContent = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});
const BoundaryFooter = styled(Box)({
  width: '100%',
  padding: `calc(${SPACING_BASE} * 2)`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: SPACING_BASE,
});

interface RouterErrorBoundaryProps {
  authorized?: boolean;
}

interface ExtendedRouterError extends Error {
  fileName?: string;
  lineNumber?: number;
  columnNumber?: number;
}

const RouterErrorBoundary = ({ authorized }: RouterErrorBoundaryProps) => {
  const error = useRouteError() as ExtendedRouterError;
  const navigate = useNavigate();

  console.error(error);

  return (
    <BoundaryWrapper>
      <Container maxWidth="md">
        <BoundaryContainer>
          <BoundaryHeading>
            <ReportProblemIcon fontSize="large" />
            <Typography variant="h1">Error: {error?.name}</Typography>
            <Typography variant="subtitle1">{error?.message}</Typography>
          </BoundaryHeading>
          <BoundaryMeta>
            <Chip label={`File: ${error?.fileName}`} color="secondary" />
            <Chip label={`Line: ${error?.lineNumber} | Column: ${error?.columnNumber}`} />
            <Typography></Typography>
          </BoundaryMeta>
          <BoundaryContent>
            <OutlinedInput label="Output" value={error?.stack} readOnly fullWidth rows={8} multiline />
            <Alert severity="info">If the problem persists, contact your administrator</Alert>
          </BoundaryContent>
          <BoundaryFooter>
            <Button
              variant="contained"
              component={Link}
              to={window.location.href}
              onClick={(event) => {
                event.preventDefault();
                navigate(0);
              }}
            >
              Reload page
            </Button>
            {authorized && (
              <Button
                component={Link}
                to={ROUTES.login.path}
                onClick={(event) => {
                  event.preventDefault();
                  // TODO logout
                  navigate(ROUTES.login.path);
                }}
              >
                Logout and try again
              </Button>
            )}
          </BoundaryFooter>
        </BoundaryContainer>
      </Container>
    </BoundaryWrapper>
  );
};

export default RouterErrorBoundary;
