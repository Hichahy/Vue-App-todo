import { mount } from '@vue/test-utils';
import '@vue/vue3-jest';
import '@vue/cli-plugin-unit-jest';
import TodoApp from '../../src/components/todoApp/TodoApp.vue';

describe('TodoApp.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(TodoApp);
  });
  it('test input', () => {
    const textInput = wrapper.find('input[type="text"]');
    textInput.setValue('some value');
    expect(textInput.element.value).toBe('some value');
  });

  it('test added task', async () => {
    const textInput = wrapper.find('input[type="text"]');
    const button = wrapper.find('button');
    textInput.setValue('some value');
    await button.trigger('click');
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(4);
  });

  it('test if empty input dont add task', async () => {
    const textInput = wrapper.find('input[type="text"]');
    const button = wrapper.find('button');
    expect(textInput.element.value).toBe('');
    await button.trigger('click');
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(3);
  });

  it('test delete task', async () => {
    const iconDelet = wrapper.find('[data-test="delTask"]');
    await iconDelet.trigger('click');
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
  });

  it('test show task is complete', async () => {
    const iconComplete = wrapper.find('[data-test="doneTask"]');
    await iconComplete.trigger('click');
    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed');
  });
});
