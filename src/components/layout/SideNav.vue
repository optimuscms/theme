<template>
    <ul class="side-nav list-reset">
        <slot></slot>
    </ul>
</template>

<style lang="scss">
    .side-nav {
        > li {
            &:not(:last-child) {
                position: relative;

                &:after {
                    left: 0;
                    right: 0;
                    height: 1px;
                    content: '';
                    position: absolute;
                    background-size: 8px 1px;
                    background-image: linear-gradient(to right, 
                        rgba(255, 255, 255, 0.4) 0px, 
                        rgba(255, 255, 255, 0) 1px,
                        rgba(255, 255, 255, 0) 100%
                    ); 
                }
            }

            > a {
                display: flex;
                padding: 0.5rem 0;
                align-items: center;
                color: config('colors.white');
                justify-content: space-between;

                > span {
                    &:not(.icon) {
                        text-transform: uppercase;
                        letter-spacing: config('tracking.extra-wide');
                    }

                    &.icon {
                        margin-right: -0.5rem;
                    }
                }
            }

            &:hover,
            &.active {
                > a {
                    color: config('colors.primary');
                }
            }
        }
    }

    .side-sub-nav {
        margin-bottom: 0.5rem;

        > li {
            &:not(.divide) {
                padding-left: 0.5rem;
                padding-bottom: 0.35rem;

                &:not(:first-child) {
                    padding-top: 0.35rem;
                }
            }

            &.divide {
                height: 1px;
                display: block;
                margin: 0.5rem 0 0.5rem 0.5rem;
                background-color: rgba(255, 255, 255, 0.05);
            }

            > a {
                display: block;
                padding: 0.5rem 0.75rem;
                text-transform: uppercase;
                color: config('colors.white');
                font-size: config('textSizes.xs');
                border-radius: config('borderRadius.sm');
                letter-spacing: config('tracking.extra-wide');
            }

            &:hover,
            &.active {
                > a {
                    background-color: config('colors.blue-darkest');
                }
            }
        }
    }
</style>
