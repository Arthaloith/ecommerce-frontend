import React from 'react'
import { Lable, WrapperInfo, WrapperContainer, WrapperValue, WrapperCountOrder, WrapperItemOrder, WrapperItemOrderInfo } from './style';
import Loading from '../../components/LoadingComponent/Loading';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { orderContant } from '../../contant';
import { convertPrice } from '../../utils';


const OrderSucess = () => {
  const location = useLocation()
  const { state } = location
  return (
    <div style={{ background: '#f5f5fa', with: '100%', height: '100vh' }}>
      <Loading isLoading={false}>
        <div style={{ height: '100%', width: '1270px', margin: '0 auto' }}>
          <div style={{ backgroundColor: '#f5f5fa', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', color: 'lightgreen' }}>Order Success! Thanks for selling your soul to us!</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <WrapperContainer>
              <WrapperInfo>
                <div>
                  <Lable style={{ fontSize: '20px' }}>Delivery method</Lable>
                  <WrapperValue>
                    <span style={{ color: '#ea8500', fontWeight: 'bold' }}>{orderContant.delivery[state?.delivery]}</span> Amogus Sus Deliveries
                  </WrapperValue>
                </div>
              </WrapperInfo>
              <WrapperInfo>
                <div>
                  <Lable style={{ fontSize: '20px' }}>Payment method</Lable>

                  <WrapperValue>
                    {orderContant.payment[state?.payment]}
                  </WrapperValue>
                </div>
              </WrapperInfo>
              <WrapperItemOrderInfo>
                {state.orders?.map((order) => {
                  return (
                    <WrapperItemOrder key={order?.name}>
                      <div style={{ width: '500px', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <img src={order.image} style={{ width: '77px', height: '79px', objectFit: 'cover' }} />
                        <div style={{
                          width: 260,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>{order?.name}</div>
                      </div>
                      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>
                          <span style={{ fontSize: '13px', color: '#242424' }}>Item Price: {convertPrice(order?.price)} | </span>
                        </span>
                        <span>
                          <span style={{ fontSize: '13px', color: '#242424' }}>Quantity: {order?.amount}</span>
                        </span>
                      </div>
                    </WrapperItemOrder>
                  )
                })}
              </WrapperItemOrderInfo>
              <br />
              <br />
              <WrapperItemOrderInfo>
                <span style={{ fontSize: '16px', color: 'red' }}>Grand Total: {convertPrice(state?.totalPriceMemo)}</span>
              </WrapperItemOrderInfo>
            </WrapperContainer>
          </div>
        </div>
      </Loading>
    </div>
  )
}

export default OrderSucess