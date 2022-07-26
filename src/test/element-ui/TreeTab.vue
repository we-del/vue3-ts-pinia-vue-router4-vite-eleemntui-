<template>
  <el-tree
      需要展示的树结构，是一个数组+对象行驶
      :data="data"
      添加复选框
      show-checkbox

      :props="defaultProps"
      当check的选中状态改变时触发，第一个参数为该节点和其父节点，自二个参数为当前是否选中
      @check-change="test"
  />
</template>

<script lang="ts" setup>
const defaultProps = {
  children: 'children',
  label: 'label',
}

function test(a: any, b: any, c: any, d: any) {
  console.log(a, b, c, d);
}

const data = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
]
</script>
