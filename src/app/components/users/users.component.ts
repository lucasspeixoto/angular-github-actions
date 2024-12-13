import { ChangeDetectionStrategy, Component, resource } from '@angular/core';
import { User } from '../../models/user.model';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-users',
  imports: [LoadingComponent],
  template: `
    <section>
      @if (users.isLoading()) {
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
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              @for (user of users.value(); track user.id) {
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th>
                  <td>{{ user.name }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>
                    {{ user.address.street }}, {{ user.address.suite }},
                    {{ user.address.city }}
                  </td>
                  <td>{{ user.phone }}</td>
                  <td>
                    <a href="http://{{ user.website }}" class="text-blue-500">{{
                      user.website
                    }}</a>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  public users = resource<User[], { parameters: string }>({
    loader: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      if (!response.ok) throw new Error('somenthing went wrong!');
      return await response.json();
    },
  });
}
