/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router';
import DetailContainer from './DetailContainer';
import detailVillagers from '../data/detailVillagers.json';

const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers/:id', (req, res, ctx) => {
    return res(ctx.json(detailVillagers));
  })
);

describe('DetailContainer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('display a single villager', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/5f5fb4bbbfd05c2aed82e472']} keyLength={25}>
        <DetailContainer />
      </MemoryRouter>
    );

    screen.getByText('Loading villager...');

    expect(container).toMatchSnapshot();
  });
});
