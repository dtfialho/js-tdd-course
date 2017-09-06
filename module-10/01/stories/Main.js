import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('<FullHeader/>', module)
    .add('with title', () => {
        <FullHeader title='TDD' />
    })
    .add('with title and subtitle', () => {
        <FullHeader
            title="TDD"
            subtitle="What is tested may never break."
        />
    })
    .add('with title, subtitle, bgColor', () => {
        <FullHeader
            title="TDD"
            subtitle="What is tested may never break."
            bgColor="#3299BB"
        />
    })
    .add('with title, subtitle, bgColor, textColor', () => {
        <FullHeader
            title="TDD"
            subtitle="What is tested may never break."
            bgColor="#3299BB"
            textColor="#FF9900"
        />
    })
    .add('with title, subtitle, bgColor, textColor, font', () => {
        <FullHeader
            title="TDD"
            subtitle="What is tested may never break."
            bgColor="#3299BB"
            textColor="#FF9900"
            font="cursive"
        />
    })
    .add('with title, subtitle, bgImg', () => {
        <FullHeader
            title="TDD"
            subtitle="What is tested may never break."
            bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
        />
    })
    .add('with title, subtitle, video', () => {
        <FullHeader
            title="TDD"
            subtitle="What is tested may never break."
            bgColor="#EBE9EB"
            textColor="#3299BB"
            video="http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4"
        />
    })
