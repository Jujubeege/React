import { renderHook, act } from '@testing-library/react-hooks';
import { usePosts } from '../usePosts';

describe('usePosts', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should add new post', () => {
    const { result } = renderHook(() => usePosts());

    act(() => {
      result.current.addPost({
        title: 'Test Post',
        content: 'Test Content'
      });
    });

    expect(result.current.posts).toHaveLength(1);
    expect(result.current.posts[0].title).toBe('Test Post');
  });

  // Add more tests...
});