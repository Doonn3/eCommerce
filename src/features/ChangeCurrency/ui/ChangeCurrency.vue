<script lang="ts" setup>
import { ref, shallowRef } from 'vue';
import CurrencyRUBIcon from '@shared/ui-kit/assets/CurrencyRUBIcon.vue';
import CurrencyUSDIcon from '@shared/ui-kit/assets/CurrencyUSDIcon.vue';
import CurrencyEURIcon from '@shared/ui-kit/assets/CurrencyEURIcon.vue';
import { useAppState, type CurrencyCodeType } from '@shared/State/AppState';
import { OnClickOutside } from '@vueuse/components';

const appState = useAppState();

const onSelectOption = (event: Event) => {
  const target = event.target as HTMLElement;
  const liItem = target.closest('.select-content__option');
  if (!(liItem instanceof HTMLLIElement)) return;

  const currencyCode = liItem.dataset.value as CurrencyCodeType;
  if (currencyCode === undefined) return;

  appState.changeCurrencyCode(currencyCode);
  isShowOptions.value = false;

  selectedCurrency.value = currencyIcons[currencyCode];
};
const currencyIcons = {
  USD: CurrencyUSDIcon,
  EUR: CurrencyEURIcon,
  RUB: CurrencyRUBIcon
};
const selectedCurrency = shallowRef(currencyIcons[appState.getState.currencyCode] || currencyIcons.USD);
const isShowOptions = ref(false);
const onClick = () => {
  isShowOptions.value = !isShowOptions.value;
};
</script>

<template>
  <on-click-outside @trigger="isShowOptions = false">
    <div class="custom-select">
      <button
        class="custom-select__btn"
        @click="onClick"
      >
        <component :is="selectedCurrency" />
      </button>
      <template v-if="isShowOptions">
        <ul
          class="select-content"
          @click="onSelectOption"
        >
          <li
            class="select-content__option"
            data-value="USD"
            data-kek="AHAHA"
            ttt="'12314'"
          >
            <CurrencyUSDIcon />
          </li>

          <li
            class="select-content__option"
            data-value="EUR"
          >
            <CurrencyEURIcon />
          </li>

          <li
            class="select-content__option"
            data-value="RUB"
          >
            <CurrencyRUBIcon />
          </li>
        </ul>
      </template>
    </div>
  </on-click-outside>
</template>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  display: inline-block;
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }
}

.select-content {
  position: absolute;
  bottom: 40px;
  @apply bg-base-100;
  width: 40px;

  z-index: 1999;

  &__option {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 5px 0;

    &:hover {
      @apply bg-base-300;
    }
  }
}
</style>
