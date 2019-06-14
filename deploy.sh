#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

# ���ɾ�̬�ļ�
npm run docs:build

# �������ɵ��ļ���
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# ��������� https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jiageng95/fe_standard.git master:gh-pages

# git push -f git@github.com:jiageng95/jiageng95.github.io.git master

cd -