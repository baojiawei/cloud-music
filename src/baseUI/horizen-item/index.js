import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';
import Scroll from '../scroll/index'
import { PropTypes } from 'prop-types';
import { ListItem, List } from './style';


function Horizen(props) {
  const { list, oldVal, title } = props
  const { handleClick } = props

  return (
    <Scroll direction="horizental">
      <div>
        <List>
          <span>{title}</span>
          {
            list.map((item) => {
              return (
                <ListItem
                  key={item.key}
                  className={`${oldVal === item.key}? 'selected': ''`}
                  onClick={() => handleClick(item.key)}>
                  {item.name}
                </ListItem>
              )
            })
          }
        </List>
      </div>
    </Scroll>
  )
}

//list 为接受的列表数据
//oldVal 为当前的 item 值
//title 为列表左边的标题
//handleClick 为点击不同的 item 执行的方法
Horizen.defaultProps = {
  list: [],
  oldVal: '',
  title: '',
  handleClick: null
};

Horizen.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func
};
export default memo(Horizen);