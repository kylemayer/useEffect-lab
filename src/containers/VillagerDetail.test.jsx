import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router';
import VillagerDetail from './VillagerDetail';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(ctx.json());
  })
);

describe('VillagerDetail', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('display a single villager', async () => {
    const { container } = render(
      <MemoryRouter>
        <VillagerDetail />
      </MemoryRouter>
    );

    screen.getByText('Loading villager...');

    await screen.findByText('Admiral', { exact: false });
    expect(container).toMatchSnapshot();
  });
});