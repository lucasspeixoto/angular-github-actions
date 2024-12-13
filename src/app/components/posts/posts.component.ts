import { ChangeDetectionStrategy, Component, resource } from '@angular/core';
import { Post } from '../../models/post.model';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-posts',
  imports: [LoadingComponent],
  template: `
    <section>
      @if (posts.isLoading()) {
        <app-loading />
      } @else {
        <div class="mx-10 my-4 h-auto">
          <table class="table w-full mb-10">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>Id</th>
                <th>Title</th>
                <th>Text</th>
              </tr>
            </thead>
            <tbody>
              @for (post of posts.value(); track post.id) {
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th>
                  <td>{{ post.id }}</td>
                  <td>{{ post.title }}</td>
                  <td>{{ post.body }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent {
  public posts = resource<Post[], { parameters: string }>({
    loader: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (!response.ok) throw new Error('somenthing went wrong!');
      return await response.json();
    },
  });
}
