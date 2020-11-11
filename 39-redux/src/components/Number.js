import React from 'react'
import {store} from '../App'

const Number = () => {
    const handelSetValue = (e) => {
       store.dispatch({ type:'SETVALUE', payload:e.target.value})
    }
    return (
        <div>
        <div class="profile" id='profile'>{}</div> 
       <input type="number" name="number" min="0" onChange={handelSetValue}></input>
       </div>
    );
};
export default Number


class Node {
    constructor(value){
      this.value = value,
      this.next = null
    }
  }
  
  class LinkList{
    constructor(){
      this.root = null
    }
  
  
    appendNode(value){
      let node = new Node(value)
      if(this.root == null ){
          this.root = node
          return this
      }
      let current = this.root
      while(current.next !== null){
        current = current.next
      }
      current.next = node
      return this
    }
  
    find(value){
      if(this.root == null){ 
        return false
      }
      let current = this.root
      while(current !== null ){
        console.log(current.value)
        if(current.value == value){
          return current
        }
        current = current.next
      }
      return false
    }
  
    remove(value){
      if(this.root == null) return false
      if(this.root.value == value){
        this.root = this.root.next
        return this
      }
      let current = this.root
      while(current.next){
        if(current.next.value == value){
          let temp = current.next
          current.next = current.next.next
          temp.next = null
          return this
        }
        current = current.next
      }
      return this
    }
  
  }
  
  
  let ll = new LinkList()
  ll.appendNode('a')
  ll.appendNode('b')
  ll.appendNode('c')
  ll.find('c')
  ll.remove('b')
  console.log(ll)
  
