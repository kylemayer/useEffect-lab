import React from 'react';
import { render, screen } from '@testing-library/react';
import VillagerContainer from './VillagerContainer';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import listVillagers from '../data/listVillagers.json';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(ctx.json(listVillagers));
  })
);

describe('VillagerContainer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of villagers on the page', async () => {
    const { container } = render(
      <MemoryRouter>
        <VillagerContainer />
      </MemoryRouter>
    );

    screen.getByText('Loading villagers...');

    const ul = await screen.findByRole('list', { name: 'villagers' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});
