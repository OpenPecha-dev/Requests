<h1 align="center">
  <br>
  <a href="https://openpecha.org"><img src="https://avatars.githubusercontent.com/u/82142807?s=400&u=19e108a15566f3a1449bafb03b8dd706a72aebcd&v=4" alt="OpenPecha" width="150"></a>
  <br>
</h1>

<h3 align="center">Requests</h3>

<p align="center">
  <a href="#description">Description</a> •
  <a href="#owner">Owner</a> •
  <a href="#integrations">Integrations</a> •
  <a href="#docs">Docs</a>
</p>
<hr>

## Repo description

This repo is dedicated to managing RFWs and RFCs.

- RFW -> Request for Work, [Create](https://github.com/OpenPecha/Requests/issues/new?assignees=&labels=&template=RFW.md&title=%5BRFW%5D")
- RFC -> Request for Comment, [Create](https://github.com/OpenPecha/Requests/issues/new?assignees=&labels=&template=RFC.md&title=%5BRFC%5D)

## OpenPecha development workflow for developers

- སྦྱིན་བདག The **Management** orders and pays for the job. 
- འགན་འཁུར་བ། The **Job Owner** oversees the job for Management.
- ལག་བསྟར་བ། The **Team Lead** plans and does the job.
- ལས་གྲོགས། The Team Lead's **Teammates** help the Team Lead do the job.

### 1. Receive an RFW

Receive an RFW from management.

### 2. Create an RFC

Review the RFW and [create an RFC](https://github.com/OpenPecha/Requests/issues/new?assignees=&labels=&template=RFC.md&title=%5BRFC%5D) for it. This involves:

1. Understanding the work
1. Considering several possible solutions
1. Understanding their pros and cons of each solution
1. Choosing the best solution
1. Creating a plan that will lead to success

See [How fill out an RFC](#) for specific directions.

> **Note** RFCs should be kept in the [Requests repo](https://github.com/OpenPecha/Requests/) except while assigning issues .

### 3. Get the RFC approved

1. Let management know that the RFC is ready for review.
1. Meet on-one-one with each member of the management team to go over the RFC.
1. Integrate management's suggestions.
1. Submit the RFC for management to sign off on.

> **Note** This process should take no more than two days.

### 4. Create a repository

If the approved RFC is for a **new** project:

1. Create a new repository for the project using the [OpenPecha project template](https://github.com/OpenPecha/openpecha-project-template).
1. Update the repo's README file.
1. Transfer the RFC to the new repo.

If the approved RFC is for an **ongoing** project:

1. Update the repo's README file if needed to include information about the new work you are doing.
1. Transfer the RFC to the repo where you will be working.

### 5. Create a GitHub project in the repository

1. Create a Github project for the work.

### 6. Convert workphase items into issues

1. Convert each item in the RFC's workphase section [into an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-task-list-item).

### 7. Assign issues and add to project board

1. Assign each issue to yourself or your teammate if you are working as a team.
1. [Add each issue to the project](https://docs.github.com/en/github-ae@latest/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board).

### 8. Move the RFC back to the Requests repo

1. [Move the RFC back to the Requests repo](https://docs.github.com/en/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository) so management can easily find it.

### 9. Do the work and create pull requests

1. Do the work and add commits.
2. When you have finished an issue
  1.  
4. Make one pull request per issue/workphase.
5. Let your assigned reviewers know the PR is ready for them.

### 10. Move to the next issue
The Job Owner reviews each pull request, asks for changes if needed, and signs off on the work by merging the PR. After merging the PR, the Job Owner moves the issue to the completed section of the project board.

## Repo owners

- [@ngawangtrinley](https://github.com/ngawangtrinley)
- [@mikkokotila](https://github.com/mikkokotila)
