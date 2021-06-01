import React, { createContext, useState, useContext, useEffect } from 'react'
import { RenderItemModal } from '../Components/RenderItemModal'
import '../services/server'

const CartContext = createContext({})


export default function CartProvider({children}){

  const [On , setOn] = useState(true)
  const [cast, setCast] = useState([])
  const [value , setValue] = useState()
  const [quantidade, setQuantidade] = useState(1)

  useEffect(() => {
    let value = 0
    cast.map((item) =>{
      value = value + item.price
    })
    setValue(value)
  }, [cast])

  function Add(item){
    const newCast = cast
    newCast.unshift(item)
    setCast([...newCast])
  }

  function Remove(index){
    const newCast = cast.filter((item, i) => i !== index)

    setCast([...newCast])
  }


  function RemoveAll(index, item){
    const newCast = cast.splice(index, index)
    cast.forEach(function(item) {
      item.quantidade = 0;
    });
    setCast([...newCast])
  }

  function Soma(item){
    const it = item
    it.forEach(function(item: any) {
      item.quantidade =  quantidade;
    });
    setQuantidade(quantidade + 1)
  }

  const store = {
    On,
    setOn,
    Add,
    value,
    cast,
    Remove,
    setValue,
    RemoveAll,
    quantidade,
    setQuantidade,
    Soma,
    setCast
  }

  return(
    <CartContext.Provider value={store}>{children}</CartContext.Provider>
  )
}


export function useCart(){
  const context = useContext(CartContext)
  
  const {
    On,
    setOn,
    Add,
    value,
    cast,
    Remove,
    setValue,
    RemoveAll,
    quantidades,
    quantidade, 
    setQuantidade,
    Soma,
    setCast
  } = context

  return{
    On,
    setOn,
    Add,
    value,
    cast,
    Remove,
    setValue,
    RemoveAll,
    quantidades,
    quantidade,
    setQuantidade,
    Soma,
    setCast
  }
}