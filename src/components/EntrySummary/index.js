import React from 'react';
import Container from '../Core/Container';
import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';

const EntrySummary = ({ entriesGrouped }) => {
  return (
    <Container title="Categorias" actionLabelText="Últimos 7 dias" actionButtonText="Ver mais">
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
    </Container>
  );
};

export default EntrySummary;
