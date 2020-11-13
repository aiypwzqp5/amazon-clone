import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useStateValue } from '../state/StateProvider';
import { db } from '../firebase';
import Order from './Order';

const StyledOrders = styled.div`
  padding: 20px 80px;
  @media (max-width: ${({ theme }) => theme.device.md}) {
    padding: 20px;
  }
  > h1 {
    margin: 30px 0;
  }
`;

export default function Orders() {
  const [{ user }] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    return user
      ? db
          .collection('users')
          .doc(user?.uid)
          .collection('orders')
          .orderBy('created', 'desc')
          .onSnapshot((snapshot) =>
            setOrders(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            )
          )
      : setOrders([]);
  }, [user]);

  return (
    <StyledOrders>
      <h1>Your Orders</h1>

      <div>
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </StyledOrders>
  );
}
