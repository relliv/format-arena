// A small project for smoke runs, not formatted on purpose.
export const items = [ {id:'a',count:1}, {id:'b',count:2} ]

export function total(list){ return list.reduce((sum,item)=>sum+item.count,0) }
