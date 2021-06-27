import { assert, expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import SearchPage from '@/components/SearchPage.vue'


describe('SearchPage.vue', () => {
  let wrapper;

  beforeEach(() => {})

  it('renders props.msg when passed', () => {
    const msg = 'iTunes'
    wrapper = shallowMount(SearchPage, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
  
  /*it('get array of results', () => {
    wrapper = shallowMount(SearchPage, {})
    wrapper.vm.term = "jack";
    wrapper.vm.media = "music";
    wrapper.vm.entity = "album";
    wrapper.vm.searchMusic();
    assert.isNotEmpty(
      wrapper.vm.results,"its empty"
    )
  })*/
})
