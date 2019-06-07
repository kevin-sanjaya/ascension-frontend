import Vue from 'vue';
import { expect } from 'chai';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('Sample test', () => {
    const vm = new Vue(Home).$mount();
    expect(vm.title).to.be.equal('Home');
  });
});
