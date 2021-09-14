import React from 'react';
import { render, screen } from '@testing-library/react';
import VillagersList from './VillagersList';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(ctx.json());
  })
);

describe('VillagersList Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of villagers on the page', async () => {
    const { container } = render(
      <MemoryRouter>
        <VillagersList />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: '' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});
